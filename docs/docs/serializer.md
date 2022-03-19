---
title: Serializer
sidebar_label: Serializer
---

The serializer enables you to serialize some Boxed values (e.g. to store in `LocalStorage`).

```ts
import { Serializer } from "@swan-io/boxed";
```

## Serializer.encode(value)

Stringifies the input to JSON, managing the `AsyncData`, `Option` and `Result` types properly.

```ts
Serializer.encode({
  data: AsyncData.Done({
    name: Option.None(),
  }),
});
// {"data":{"__boxed_type":"AsyncData","tag":"Done","value":{"name":{"__boxed_type": "Option","tag":"None"}}}}
```

## Serializer.decode(value)

Parse the JSON input, reviving the `AsyncData`, `Option` and `Result` types properly.

```ts
Serializer.decode(`{"__boxed_type": "Option","tag":"None"}`); // Option.None();
```
