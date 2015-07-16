# meteor-reactjs-todo

Demo code for the Kansas City Meteor Meetup

## Step 1

- Add Packages
```
meteor add react
meteor add materialize:materialize
meteor add fortawesome:fontawesome
```

- `client/main.html`

## Step 2

- `client/main.html` - Removed navbar html and added `<div id="root"></div>` for our target.
- `lib/Nav.jsx` - Now holds our navbar html.
- `lib/App.jsx` - Calls <Nav /> in render()
- `client/main.jsx` - Renders the React app on client startup

## Step 3

- `lib/NewTodoForm.jsx`
- `lib/App.jsx` - Add call to `<NewTodoForm />`

## Step 4

- `lib/List.jsx`
- `lib/ListItem.jsx`
- `/lib/App.jsx` - Added <List />

## Step 5

- `lib/List.jsx` - Changed sort order.
- `lib/ListItem.jsx` - Added remove item.
