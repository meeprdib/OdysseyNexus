# EntityJSEvents.addGoals

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: AddGoalTargetsEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| nearestAttackableTarget | int, Class<E extends LivingEntity>, int, boolean, boolean, Predicate<LivingEntity> |  | void | ✘ |
| arbitraryTargetGoal | int, Function<T extends Mob, Goal> |  | void | ✘ |
| nonTameRandomTarget | int, Class<E extends LivingEntity>, boolean, Predicate<LivingEntity> |  | void | ✘ |
| resetUniversalAngerTarget | int, boolean |  | void | ✘ |
| hurtByTarget | int, List<Class<?>>, boolean, List<Class<?>> |  | void | ✘ |
| ownerHurtByTarget | int |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

- `void nearestAttackableTarget(int priority, Class<E extends LivingEntity> targetClass, int randomInterval, boolean mustSee, boolean mustReach, Predicate<LivingEntity> targetConditions)`

  Parameters:
  - priority: int- The priority of the goal
  - targetClass: Class<E extends LivingEntity>- The entity class that should be targeted
  - randomInterval: int- The interval at which the goal amy be 'refreshed'
  - mustSee: boolean- If the mob must have line of sight at all times
  - mustReach: boolean- If the mob must be able to reach the target to attack
  - targetConditions: Predicate<LivingEntity>- The conditions under which the targeted entity will be targeted, may be null

```
Adds a `NearestAttackableTargetGoal` to the entity
```

- `void arbitraryTargetGoal(int priority, Function<T extends Mob, Goal> goalSupplier)`

  Parameters:
  - priority: int- The priority of the goal
  - goalSupplier: Function<T extends Mob, Goal>- The goal supplier, a function that takes a Mob and returns a Goal

```
Enables the addition of arbitrary goals to an entity

It is the responsibility of the user to ensure the goal is
compatible with the entity

Example of usage:
=====================================
builder.arbitraryTargetGoal(3, entity -> new $DefendVillageTargetGoal(entity))
=====================================

Note in the example the entity must be an instance of IronGolem
```

- `void nonTameRandomTarget(int priority, Class<E extends LivingEntity> targetClass, boolean mustSee, Predicate<LivingEntity> targetConditions)`

  Parameters:
  - priority: int- The priority of the goal
  - targetClass: Class<E extends LivingEntity>- The entity class that should be targeted
  - mustSee: boolean- If the mob must have line of sight at all times
  - targetConditions: Predicate<LivingEntity>- The conditions under which the targeted entity will be targeted, may be null

```
Adds a `NonTameRandomTargetGoal` to the entity, only applicable to **tamable** mobs
```

- `void resetUniversalAngerTarget(int priority, boolean alertOthersOfSameType)`

  Parameters:
  - priority: int- The priority of the goal
  - alertOthersOfSameType: boolean- If other mobs of the same type should be alerted

```
Adds a `ResetUniversalAngerTargetGoal` to the entity, only applicable to **neutral** mobs
```

- `void hurtByTarget(int priority, List<Class<?>> toIgnoreDamage, boolean alertOthers, List<Class<?>> toIgnoreAlert)`

  Parameters:
  - priority: int- The priority of the goal
  - toIgnoreDamage: List<Class<?>>- The classes that damage should be ignored from
  - alertOthers: boolean- If other mobs should be alerted when this mob is damaged
  - toIgnoreAlert: List<Class<?>>- The entity classes that should not be alerted

```
Adds s `HurtByTargetGoal` to the entity, only applicable to **pathfinder** mobs
```

- `void ownerHurtByTarget(int priority)`

  Parameters:
  - priority: int- The priority of the goal

```
Adds a `OwnerHurtByTargetGoal` to the entity, only applicable to **tamable** mobs
```

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```



### Example script:

```js
EntityJSEvents.addGoals(extra_id, (event) => {
	// This space (un)intentionally left blank
});
```

