# Codex prompt: HomeCheck product and add-on catalog

Paste everything below the line into Codex.

---

Add a **product and add-on catalog** to HomeCheck (`MyIntelHome/myintel-assesment`, live at https://homecheck.myintelhome.com). It gives MyIntel staff one place to:

- add products and add-ons,
- explain why each one is recommended,
- link each product to the HomeCheck needs it solves.

HomeCheck results can then suggest the right items, and staff can see everything MyIntel offers in Operations. Pull the latest `main` first. Keep all changes additive: no destructive migrations, and no changes to existing answers, scoring or wording beyond what is described here.

## Background

MyIntel sells three monitoring plans (HomeAware, HomeProtect, HomeComplete) and wants to add lower-cost safety add-ons that its installers fit during setup or a home safety visit. Every plan includes **ongoing support tailored to the devices installed**: check-up visits where we replace batteries, test devices and adjust the setup.

HomeCheck already produces actions with a `needCode` and `category` (`src/domain/home-actions.ts`). Examples include `modificationCodes` like `grab_bar_shower`, `stair_surface` and `shower_non_slip_surface`, and `lightingCodes` like `motion_lighting_stairs` and `motion_lighting_bathroom`. The catalog should hang off these same need codes. `shopLink()` in `src/domain/lead-config.ts` already builds shop URLs from need codes. Keep that working, and let the catalog become the source of truth for which items match a need.

## 1. Data model (additive Drizzle migration)

**`catalog_items`**
- `id`, `name`, `slug`
- `category`, one of: `lighting`, `slip_protection`, `bathroom`, `kitchen_safety`, `smart_home`, `monitoring_device`, `mobility`
- `customer_summary`: one plain sentence a family sees, for example "Lights the stairs automatically at night."
- `why_recommended`: the reasoning shown with a recommendation, for example "You said the stairs are hard to see at night. A light that turns on by itself means no hunting for a switch."
- `staff_notes`: internal only
- `install_type`, one of: `customer_diy`, `myintel_installer`, `licensed_electrician`, `licensed_plumber_gas`
- `license_required` (boolean, derived from `install_type` or set explicitly)
- `service_interval_months`: nullable, for example 4 for battery stair lights
- `service_task`: nullable, for example "Replace 3 AAA batteries and test motion trigger"
- `supplier`, one of: `health_mobius`, `talius`, `amazon`, `other`; plus `supplier_sku` and `supplier_url`
- `unit_cost_cents` and `price_cents`: staff-only, nullable
- `active` and `show_to_customers` (booleans, default false)
- `sort_order`, `created_at`, `updated_at`, `updated_by`

**`catalog_item_needs`**: many-to-many from `catalog_item_id` to `need_code`, plus an optional `priority` (1 = best match).

## 2. Operations: catalog screen (staff only)

Add a **Catalog** tab in Operations, using the same staff auth as the rest of Operations:

- A list of all items, filterable by category, active and customer-visible, showing name, category, linked needs, install type, service interval, cost and price.
- Add and edit forms for every field. Need codes are picked from the codes the app already generates. Also allow adding a new code, with a warning that no HomeCheck question produces it yet, so it can only be added by hand.
- A **License required** badge when `install_type` is electrician or plumber/gas.
- Deactivate instead of delete.

## 3. Show matches in HomeCheck results (customers)

In the results action plan (`HomeActionPlan.tsx`), under each action whose `needCode` has active, customer-visible items, add a small **"What we can add"** block:

- item name, `customer_summary`, and `why_recommended`
- no prices or costs
- no brand-driven language

Keep the current "See options" shop link behavior.

Copy rules for anything customers see: plain language, no em dashes, and do not use the words "AI", "monitoring", "track" or "flag".

## 4. Operations: suggested add-ons per lead or request

In a lead or help-request detail view, show **Suggested add-ons for this home**:

- the matched items, grouped by need
- each item's `why_recommended`, cost and price
- a running total of materials cost and price

This is a quote starter for the home safety visit. Staff can tick items to mark them as quoted.

## 5. Installed devices and ongoing support (can be phase 2)

Let staff record which catalog items are **installed** for a customer, with an install date. From each item's `service_interval_months`, show the **next check-up due date** and a combined list of service tasks for the next visit. Show it in Operations, and surface the soonest due date in the existing follow-up planning. This is how "ongoing support tailored to installed devices" gets tracked. No automatic customer messages.

## 6. Seed starter items (inactive and hidden from customers, prices blank)

Seed these so Austin can review, price and switch them on. Map each one to the existing need codes, or flag it in your report when no code fits:

| Item | Category | Install | Service | Need codes |
|---|---|---|---|---|
| Battery dusk-to-dawn / motion stair lights | lighting | myintel_installer | 4 months, batteries | motion_lighting_stairs |
| Plug-in motion night lights (hallway, bedroom, bathroom route) | lighting | myintel_installer | none | motion_lighting_bedroom, motion_lighting_bathroom, motion_lighting_living |
| Smart bulb + battery motion sensor (bathroom, no rewiring) | lighting | myintel_installer | battery check | motion_lighting_bathroom |
| Motion-sensing wall switch (bathroom) | lighting | licensed_electrician | none | motion_lighting_bathroom |
| Non-slip stair treads | slip_protection | myintel_installer | inspect on check-up | stair_surface |
| Rug grip pads / rug tape | slip_protection | myintel_installer | inspect on check-up | (new code if no loose-rug code exists) |
| Tub and shower non-slip strips | slip_protection | myintel_installer | inspect on check-up | shower_non_slip_surface, bathroom_non_slip_floor |
| Grab bars (toilet, shower) | bathroom | myintel_installer | inspect on check-up | grab_bar_toilet, grab_bar_shower |
| Stove auto-shutoff, electric range | kitchen_safety | myintel_installer | test on check-up | (map to a kitchen code if one fits, else new code) |
| Stove auto-shutoff, gas range | kitchen_safety | licensed_plumber_gas | test on check-up | same as above |
| Water leak sensors | smart_home | myintel_installer | batteries | (new code; manual add) |
| Smart lock | smart_home | myintel_installer | batteries | entry_access |
| Video doorbell (battery) | smart_home | myintel_installer | recharge or batteries | entry_access |
| Smart thermostat | smart_home | myintel_installer (confirm Denver low-voltage rules first) | none | (manual add) |

Default `supplier` to `health_mobius` for safety and mobility items, and leave it `other` for smart home items.

## 7. Test and report

- Migration runs cleanly on a copy of production. Existing results look the same when no items are active.
- Mark one item active and customer-visible, run HomeCheck with answers that trigger its need code, and confirm the "What we can add" block appears with no prices.
- Staff can add and edit items. Customers cannot reach any catalog API, and cost or price fields never reach the browser on customer pages.
- Report what you changed, any new need codes you added, and how to roll it back. Do not turn on customer visibility for any item without Austin's OK.
