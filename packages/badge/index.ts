import { VantComponent } from '../common/component';

VantComponent({
  relation: {
    type: 'ancestor',
    name: 'badge-group'
  },

  props: {
    info: Number,
    title: String
  },

  methods: {
    onClick() {
      const group = this.getRelationNodes('../badge-group/index')[0];
      if (group) {
        group.setActive(this);
      }
    },

    setActive(active: boolean) {
      this.setData({ active });
    }
  }
});
