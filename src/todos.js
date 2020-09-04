import React from 'react'
import { List,ListItem,ListItemText } from '@material-ui/core';
function todos(props) {
    return (
        <List>
             <ListItem>
                  <ListItemText primary="todo"
                    secondary={ props.text}
                  />
                </ListItem>,
        </List>
    )
}

export default todos
