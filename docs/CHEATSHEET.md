# README Maintenance Cheat Sheet

Cheat sheet for preparing README for release. Ensures inline code does not break across lines and tables remain readable.

## Steps

### 1. Remove existing `<nobr>` tags

**Find (regex ON):**

```text
<nobr>(.*?)<\/nobr>
```

**Replace:**

```text
$1
```

<!-- If content can be multiline, use `(?s)<nobr>(.*?)<\/nobr>`. -->

### 2. Wrap inline code

**Find:**

```text
(?<!`)(`[^`\r\n]+`)(?!`)
```

**Replace:**

```text
<nobr>$1</nobr>
```

Does not match triple backticks or empty backticks.

### 3. Manual line breaks in tables

Long flags (e.g. `--internationalization`) can stretch cells. Break already wrapped `<nobr>` words with `<br />`.

Example:
`<nobr>--internationali-</nobr><br /><nobr>zation</nobr>`

## Summary

| Step | Action              | Find                         | Replace           |
| ---- | ------------------- | ---------------------------- | ----------------- |
| 1    | Remove old wrappers | `<nobr>(.*?)<\/nobr>`        | `$1`              |
| 2    | Wrap code           | ``(?<!`)(`[^`\r\n]+`)(?!`)`` | `<nobr>$1</nobr>` |
| 3    | Manual breaks       | Insert `<br />` manually     |                   |
