enyo.kind({
  name: 'Bootplate.AuthenticatedFooterView',
  kind: "enyo.FittableRows",
  id: 'footerView',
  tag: 'footer', // give it a specific html tag
  classes: "onyx",
  fit: true,
  components: [
    {name: 'footerContainer', kind: "FittableColumns", fit: true, classes: "fittable-sample-box fittable-sample-mtb fittable-sample-o", components: [
      {name:'footerLeftContent', content: "Authenticated footer-left", classes: "fittable-sample-box fittable-sample-mlr"},
      {name:'footerCenterContent', content: "Authenticated footer-center", fit: true, classes: "fittable-sample-box fittable-sample-mlr fittable-sample-o"},
      {name:'footerRightContent', content: "footer-right", classes: "fittable-sample-box fittable-sample-mlr"}
    ]}
  ]
});
