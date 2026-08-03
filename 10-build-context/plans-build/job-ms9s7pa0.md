# Plan: Hourly realm snapshots — include pending proposals

_Updated: 2026-08-01T02:58:19.705Z_

## Problem
Hourly snapshots include pending proposals block

## Plan
Pending Root Server dig. Stage jars via publishPlugins / handoffs only — no auto restart.

## Risks
Scope creep; secret leakage; unvoted feature work.

## Rollback
Revert staged jar; keep prior handoff version.
