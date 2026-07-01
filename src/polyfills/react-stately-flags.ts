let shadowDomEnabled = false
let tableNestedRowsEnabled = false

export function enableShadowDOM() {
  shadowDomEnabled = true
}

export function shadowDOM() {
  return shadowDomEnabled
}

export function enableTableNestedRows() {
  tableNestedRowsEnabled = true
}

export function tableNestedRows() {
  return tableNestedRowsEnabled
}
