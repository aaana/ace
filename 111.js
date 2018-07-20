jQuery(grid_selector).jqGrid({
            //direction: "rtl",

            //subgrid options
            subGrid: false,
            //subGridModel: [{ name : ['No','Item Name','Qty'], width : [55,200,80] }],
            //datatype: "xml",
            subGridOptions: {
                plusicon: "ace-icon fa fa-plus center bigger-110 blue",
                minusicon: "ace-icon fa fa-minus center bigger-110 blue",
                openicon: "ace-icon fa fa-chevron-right center orange"
            },
            //for this example we are using local data
            subGridRowExpanded: function (subgridDivId, rowId) {
                var subgridTableId = subgridDivId + "_t";
                $("#" + subgridDivId).html("<table id='" + subgridTableId + "'></table>");
                $("#" + subgridTableId).jqGrid({
                    datatype: 'local',
                    data: subgrid_data,
                    colNames: ['No', 'Item Name', 'Qty'],
                    colModel: [
                        {name: 'id', width: 50},
                        {name: 'name', width: 150},
                        {name: 'qty', width: 50}
                    ]
                });
            },


            data: grid_data,
            datatype: "local",
            height: 250,
            colNames: ['', '序号', '任务名称', '教师名字', '发布时间', '参与人数', '最近修改','任务难度', '任务详情', '修改任务', '学习情况', '状态', '操作'],
            colModel: [
                {
                    name: ' ', index: '', width: 60, fixed: true, sortable: false, resize: false,
                    formatter: 'actions',
                    formatoptions: {
                        keys: true,
                        delbutton: true,//disable delete button
                        editbutton: false,

                        delOptions: {recreateForm: true, beforeShowForm: beforeDeleteCallback},
                        //editformbutton:false, //editOptions:{recreateForm: true, beforeShowForm:beforeEditCallback}
                    }
                },
                {name: 'id', index: 'id', width: 60, sorttype: "int", sortable: true, editable: true},
                {
                    name: 'course',
                    index: 'course',
                    width: 150,
                    sortable: true,
                },
                {
                    name: 'name',
                    index: 'name',
                    width: 100,
                    sortable: true,
                },
                {
                    name: 'publish_date',
                    index: 'publish_date',
                    width: 130,
                    sortable: true,
                    sorttype: "date",
                },
                {
                    name: 'count',
                    index: 'count',
                    width: 100,
                    sortable: true,
                },
                {
                    name: 'last_date',
                    index: 'last_date',
                    width: 130,
                    sortable: true,
                },{
                    name: 'difficulty',
                    index: 'difficulty',
                    width: 100,
                    sortable: true,
                },
                {
                    name: 'detail',
                    index: 'detail',
                    width: 120,
                    sortable: true,
                    formatter: function (value, grid, rows, state) {
                        return "<a href='" + value + "' style=\"color:#f60\" onclick=\"Modify(" + value + ")\">查看任务</a>"
                    }
                }, {
                    name: 'editWork',
                    index: 'editWork',
                    width: 120,
                    sortable: true,
                    formatter: function (value, grid, rows, state) {
                        return "<a href='" + value + "' style=\"color:#f60\" onclick=\"Modify(" + value + ")\">修改任务</a>"
                    }
                }, {
                    name: 'analyze',
                    index: 'analyze',
                    width: 120,
                    sortable: true,
                    formatter: function (value, grid, rows, state) {
                        return "<a href='" + value + "' style=\"color:#f60\" onclick=\"Modify(" + value + ")\">学习情况</a>"
                    }
                }, {
                    name: 'state',
                    index: 'state',
                    width: 120,
                    sortable: true,
                }, {
                    name: 'opt',
                    index: 'opt',
                    width: 120,
                    sortable: true,
                    formatter: function (value, grid, rows, state) {
                        return "<a href='" + value + "' style=\"color:#f60\" onclick=\"Modify(" + value + ")\">取消发布</a>"
                    }
                }
            ],

            viewrecords: true,
            rowNum: 10,
            rowList: [10, 20, 30],
            pager: pager_selector,
            altRows: true,
            //toppager: true,

            multiselect: true,
            //multikey: "ctrlKey",
            multiboxonly: true,

            loadComplete: function () {
                var table = this;
                setTimeout(function () {
                    styleCheckbox(table);

                    updateActionIcons(table);
                    updatePagerIcons(table);
                    enableTooltips(table);
                }, 0);
            },

            editurl: "./dummy.php",//nothing is saved
            caption: "我的创建"

            //,autowidth: true,


            /**
             ,
             grouping:true,
             groupingView : {
						 groupField : ['name'],
						 groupDataSorted : true,
						 plusicon : 'fa fa-chevron-down bigger-110',
						 minusicon : 'fa fa-chevron-up bigger-110'
					},
             caption: "Grouping"
             */

        });