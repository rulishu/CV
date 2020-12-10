 var myChart = echarts.init(document.getElementById('skills'));

        // 指定图表的配置项和数据
        option = {
   
    tooltip: {},
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: 'HTML&CSS',max:70},
            { name: 'JS编程接口',max:60},
            { name: 'JS前后分离',max:60},
            { name: 'Vue全家桶',max:65},
            // { name: 'React 全家桶',max:100},
            { name: '项目开发',max:70},
            { name: '沟通能力',max:70}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [50,50,50,50,50,50],
                name: '能力雷达'
            },
        ]
    }]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);