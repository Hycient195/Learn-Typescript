
interface small {
  age: 34,
  time: "hello"
}

interface big {
  comp: small & {one: 3}
}
