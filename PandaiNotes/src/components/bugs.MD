TodoItem.js:

1. Clicking on <MdDeleteOutline /> causes value=null to be sent to deleteItemHandler.
   - <MdDeleteOutline /> suspected to be buggy icon, where clicking on it causes inconsistencies with onClick event. Should change to something else.
2. updateItemHandler grabs the selected module in a bad way.
   - updateItemHandler uses Form.Select to output modules, but is unable to save the selected module code and name to each <option>. Instead, it grabs the selected module's code and name by string processing.
   - newTodoObject.module is missing description and status attributes, presumed to be filled in later
