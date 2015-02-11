Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
launch: function() {
console.log("My First App Mypie");
var myStore = Ext.create('Rally.data.wsapi.Store',{
model: 'PortfolioItem/Feature',
autoLoad: true,
filters: [
                    {
                        property: 'PlannedStartDate',
                        operator: '>=',
                        value: '01/01/2015'
                    }
                  /*  {
                        property: 'PlannedEndDate',
                        operator: '<=',
                        value: '31/12/2015'
                    }*/
                ],
listeners: {
load: function(myStore,mydata, success) {
console.log('got data',myStore,mydata,success);
var mygrid = Ext.create('Rally.ui.grid.Grid',{
store: myStore,
columnCfgs: [
'FormattedID','Name'
]
});
this.add(mygrid);
console.log("What is this", this);
},
scope: this
},
fetch: ['FormattedID','Name', 'ScheduleState']
	});
    }
});
