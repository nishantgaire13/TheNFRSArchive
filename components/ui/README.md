# UI Primitives

All components live in `components/ui/`. Import from the barrel:

```tsx
import { ClayCard, Badge, Eyebrow } from "@/components/ui";
```

---

## Eyebrow

Small-caps label in Inter above headings/sections.

```tsx
<Eyebrow>DOCUMENTATION SERIES / NFRS 15</Eyebrow>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Label text |
| `as` | `"p" \| "span" \| "div"` | `"p"` | HTML element |
| `className` | `string` | `""` | Extra classes |

---

## DisplayHeading

Two-part editorial H1: roman text + italic emphasis line.

```tsx
<DisplayHeading roman="Carve-outs" italic="Index 2026" size="hero" />
<DisplayHeading roman="NFRS 15 —" italic="Revenue from Contracts" size="page" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `roman` | `string` | — | First line (roman weight) |
| `italic` | `string` | — | Second line (italic) |
| `size` | `"hero" \| "page"` | `"page"` | Font size variant |
| `as` | `"h1" \| "h2"` | `"h1"` | HTML heading level |
| `className` | `string` | `""` | Extra classes |

---

## Badge

Status pill with semantic colour.

```tsx
<Badge variant="aligned">Aligned</Badge>
<Badge variant="carveout">Carve-out</Badge>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"aligned" \| "carveout" \| "deferred" \| "not-adopted" \| "neutral"` | — | Colour variant |
| `children` | `ReactNode` | — | Label text |
| `className` | `string` | `""` | Extra classes |

---

## ClayCard

Workhorse claymorphic container.

```tsx
<ClayCard padding="lg" hover>
  <p>Card content</p>
</ClayCard>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `padding` | `"sm" \| "md" \| "lg"` | `"md"` | Internal padding |
| `hover` | `boolean` | `false` | Enable lift-on-hover |
| `as` | `ElementType` | `"div"` | Wrapper element |
| `className` | `string` | `""` | Extra classes |

---

## GlassCard

Frosted translucent overlay card. Use sparingly (1× per page max).

```tsx
<GlassCard padding="md">
  <p>Floating pull-quote</p>
</GlassCard>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `padding` | `"sm" \| "md" \| "lg"` | `"md"` | Internal padding |
| `className` | `string` | `""` | Extra classes |

---

## Button

Primary / secondary / ghost / link variants. Min 44×44 touch target.

```tsx
<Button variant="primary">See all carve-outs</Button>
<Button variant="ghost">Cancel</Button>
<Button variant="link" href="/about">Learn more</Button>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary" \| "secondary" \| "ghost" \| "link"` | `"primary"` | Style variant |
| `href` | `string` | — | Renders as `<a>` when set |
| `className` | `string` | `""` | Extra classes |
| ...rest | `ButtonHTMLAttributes` | — | All native button props |

---

## Callout

Bordered info/warning/example/exam/legal box built on ClayCard.

```tsx
<Callout variant="example" title="Himalaya Textiles Pvt. Ltd.">
  <p>Revenue recognised over time…</p>
</Callout>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"info" \| "warning" \| "example" \| "exam" \| "legal"` | — | Border colour + eyebrow |
| `title` | `string` | — | Optional heading below eyebrow |
| `children` | `ReactNode` | — | Body content |
| `className` | `string` | `""` | Extra classes |

---

## ParaRef

Inline paragraph citation rendered as a mono pill with external link.

```tsx
<ParaRef std="IFRS 15" para="31" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `std` | `string` | — | Standard name (e.g. `"IFRS 15"`) |
| `para` | `string` | — | Paragraph number |
| `className` | `string` | `""` | Extra classes |

---

## StatCard

Single-metric clay card with eyebrow label + big serif value + optional delta.

```tsx
<StatCard label="Active carve-outs" value="6" delta="+2 since 2023" deltaDirection="up" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Eyebrow label |
| `value` | `string` | — | Large display number |
| `delta` | `string` | — | Change indicator |
| `deltaDirection` | `"up" \| "down" \| "neutral"` | `"neutral"` | Delta colour |
| `className` | `string` | `""` | Extra classes |

---

## QuoteCard

Pull-quote with optional citation and ornament.

```tsx
<QuoteCard
  quote="The five-step model changed everything."
  citation="— Nepali Auditor's Digest"
  ornament="""
  variant="glass"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `quote` | `string` | — | Quote text |
| `citation` | `string` | — | Attribution |
| `ornament` | `"§" \| """` | `"""` | Decorative glyph |
| `variant` | `"glass" \| "bordered"` | `"bordered"` | Visual style |
| `className` | `string` | `""` | Extra classes |

---

## SearchBar

Claymorphic search pill with "/" keyboard shortcut. Client component.

```tsx
<SearchBar placeholder="Search standards…" onSearch={(q) => console.log(q)} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | `"Search standards…"` | Input placeholder |
| `onSearch` | `(query: string) => void` | — | Submit callback |
| `className` | `string` | `""` | Extra classes |

---

## ThemeToggle

Light / dark / system cycle. Persists to localStorage. Client component.

```tsx
<ThemeToggle />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `""` | Extra classes |

---

## Breadcrumbs

Visible breadcrumb trail + JSON-LD BreadcrumbList.

```tsx
<Breadcrumbs items={[
  { label: "Home", href: "/" },
  { label: "Revenue", href: "/topics/revenue" },
  { label: "NFRS 15", href: "/standards/nfrs-15" },
]} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `BreadcrumbItem[]` | — | Ordered crumb list |
| `className` | `string` | `""` | Extra classes |

---

## TOC

Right-rail table of contents with scrollspy. Client component.

```tsx
<TOC items={[
  { id: "overview", label: "Overview" },
  { id: "scope", label: "Scope & key definitions" },
]} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `TOCItem[]` | — | Heading anchors |
| `className` | `string` | `""` | Extra classes |

---

## IllustrationFrame

Wraps inline SVG illustrations with cream bg + clay shadow + rounded corners.

```tsx
<IllustrationFrame alt="Pagoda illustration" size="lg">
  <svg>…</svg>
</IllustrationFrame>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `alt` | `string` | — | Accessible label (omit for decorative) |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Frame dimensions |
| `className` | `string` | `""` | Extra classes |
