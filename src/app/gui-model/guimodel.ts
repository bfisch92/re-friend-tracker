export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden

    Key: Bei Listen-Daten kann ein Key mitgegeben werden. Wird kein Key mitgegeben, dann werden nach Klick
    des Zurück-Buttons die Elemente nicht mehr korrekt dargestellt.
    */

    private _guiModel = {
        "application": {
            "title": "Bens Friend Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "formFieldList": [
                       {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
                        	"id": "nickname",
                            "type": "text",
                            "name": "Nickname",
                            "width": 2,
                            "required": true
                        }, 
                        {
                            "id": "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "data": [ "Study", "Family", "School" ],
                            "form": "GroupForm",
                            "width": 2
                        } ,                                                          
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "data": [ "Winterthur", "Zürich" ],
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "evtBirth",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "data": [ "Playing Tennis", "Eating Pizza" ],
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ActivityForm",
                    "title": "Activity",
                    "formFieldList": [
                        {
                            "id": "group",
                            "type": "autocomplete",
                            "name": "Activity",
                            "data": [ "Singen", "Tanzen", "Programmieren" ],
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {   
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
          		        }
                    ]
                },
				{                            
                    "id": "GroupForm",
                    "title": "Group",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "GroupName",
                            "width": 2,
                            "required": true
                        },
          				{   
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
          		        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                }
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "magenta",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-location-arrow",
                            "color": "turquoise",
                            "page": "locationspage",
                        },
                        {
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-group",
                            "color": "emerald",
                            "page": "groupspage",
                        },   
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                           }     
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Anton Amacker" }, { name: "Britta Beavers"} ],
							"page": "personpage",
                        },
                    ]
                },
                {
                    "id": "personpage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "EditFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                           }     
                        },
                        {
                            "type": "button",
                            "name": "AddActivity",
                            "icon": "fa-calendar",
                            "color": "green",
                            "search": false,
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-calendar",
                            "color": "orange",
                            "search": true,
                             "data": [ { name: "Playing Tennis" }, { name: "Eating Pizza" }, { name: "Running Eschenberg"} ],
                            "form": {
                                "form": "LocationForm"
                             }
                        }
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Adelboden" }, { name: "Winterthur" }, { name: "Zinal"}, { name: "Zürich"} ],
                            "form": {
                                "form": "LocationForm"
                         }
                      }  
                    ]   
           	 	 },
          	 	 {                            
                    "id": "groupspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewGroup",
                            "icon": "fa-weixin",
                            "color": "green",
                            "form": {
                                "form": "GroupForm"
                            }
                        },
                     	{
                            "type": "list",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "data": [ { name: "Study" }, { name: "Family" }, { name: "School"} ],
                            "form": {
                                "form": "GroupForm"
                               }
                        },
  					]
           	 	}                        

            ]
        }
     };


    get guiModel() {
        return this._guiModel;
    }
}
