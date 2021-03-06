export const columns = [
  { slots: { title: "no_" }, key: "no", scopedSlots: { customRender: "no" }, align: "center", width: "5%" },
  {
    slots: { title: "stock_name" },
    key: "stock_name",
    scopedSlots: { customRender: "stock_name" },
    align: "left"
  },
  {
    slots: { title: "manufacture_date" },
    key: "manufacture_date",
    scopedSlots: { customRender: "manufacture_date" },
    align: "left"
  },
  {
    slots: { title: "expiration_date" },
    key: "expiration_date",
    scopedSlots: { customRender: "expiration_date" },
    align: "left"
  },
  {
    slots: { title: "category_name" },
    key: "category_name",
    scopedSlots: { customRender: "category_name" },
    align: "left"
  }
];
