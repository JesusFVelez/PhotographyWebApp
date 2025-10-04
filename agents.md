- Agents MUST treat this file as the authoritative ruleset for the repository; merge it with `~/.codex/AGENTS.md` and any closer-directory `AGENTS.md`, respecting the most local guidance when conflicts arise.
- Agents MUST read `agent_rules.txt` and honor its intent to keep rules simple, flat, and tool-agnostic.
- Agents MUST prioritize the latest direct user instruction and resolve ambiguities with clarifying questions before acting.
- Agents MUST keep application changes scoped to the `react-files` Next.js workspace unless explicitly directed otherwise.
- Agents MUST preserve existing Next.js conventions (`src/pages` default exports, functional React components, established import paths).
- Agents MUST keep `Documentation/` content untouched unless the user explicitly requests edits. **Exception:** `Documentation/features/` is part of the delivery process and MUST be created/updated per the Feature Notes guidelines.
- Agents MUST create or update a feature note under `Documentation/features/<feature>.md` for every new or changed user-facing page/component, following `Documentation/features/README.md`.
- Agents MUST include the PR checklist from `Documentation/features/README.md` in each pull request description; PRs lacking the checklist are considered incomplete.
- Agents MUST ensure the feature note's Acceptance criteria and Test plan are satisfied before completion (`npm run lint`, `npm run build` must pass).
- Agents SHOULD link the relevant feature note in the PR body and/or first commit message for traceability.
- Agents MUST review `Documentation/requirements/initial-requirements.md` before planning or delivering feature work and ensure planned changes align with the categories, pricing, and payment expectations captured there.
- When work affects those requirements, Agents MUST surface any missing details (e.g., pending package tiers, "Hire Me" flow) to the user and request approval before updating the document or proceeding with assumptions.
- Agents MUST avoid restructuring or renaming files or folders without explicit user approval, and they SHOULD keep changes surgical and aligned with current patterns.
- Agents MUST leave lockfiles (`package-lock.json`, `yarn.lock`) and `.gitignore` intact unless a user-approved change requires updates.
- Agents MUST use plain ASCII when editing unless the user provides or requests specific Unicode text.
- Agents MUST validate or mentally simulate `npm run lint` from `react-files` before concluding work to maintain a clean lint state.
- Agents MUST, before handing off related work, reconcile their implementation against `Documentation/requirements/initial-requirements.md` and report back on alignment or outstanding questions so the user can finalize the requirements.
- Agents SHOULD run or mentally simulate `npm run build` when work could impact the production bundle, noting any issues back to the user.
- Agents SHOULD prefer npm commands for installs and scripts to match the committed `package-lock.json` unless the user specifies another tool.
- Agents SHOULD add concise comments only when clarifying non-obvious logic; otherwise keep code comment-light.
- Agents MAY reorganize modules inside `react-files/src/components` to improve clarity, but they MUST update every impacted import and keep behavior unchanged.
- Agents MUST obtain explicit user approval before introducing new dependencies; only add them when essential for the task and explain the rationale.

- Agents MUST NOT add a testing framework without approval; if an existing test setup is present, follow it. Otherwise, include manual test steps in the feature note’s Test plan.

- Agents MUST include the Jira issue key in branch names and PR titles, and link PRs to the corresponding Jira issue.

- Agents MUST keep to JavaScript/JSX for new files unless TypeScript adoption is explicitly approved; match existing extension patterns in react-files.

- Agents MUST include the feature note link and Jira link in the PR description alongside the PR checklist.

- Agents MUST ensure PRs pass npm run lint and npm run build; CI failures block merge.