const cityOptions = ['上海', '北京', '广州', '深圳']

export default {
  name: 'Roles',

  data() {
    return {
      // dialogVisible: false,
      // fileList: []

      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,

      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],

      value: '',
      value3: true,

      input: '',

      dialogFormVisible: false,

      dialognewFileVisible: false,

      dialogeditVisible: false,

      tableData: [{
        id: '12987122',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }, {
        id: '12987123',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }, {
        id: '12987125',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }]
    }
  },

  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {
        })
    },

    del() {
      this.$confirm('关联用户将失去权限，你还要继续吗？', '您确定要删除该角色信息吗？', {
        confirmButtonText: '继续',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },

    handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
  }
}
