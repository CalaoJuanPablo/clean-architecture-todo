# Use Cases

## View ToDos list

### Data

- List of ToDos

### Primary Course

1. User requests to load the current ToDos list
2. System looks for the current ToDos list in the ToDos repository
3. System delivers the current ToDos list to the client.

### Exception Course

1. User requests to load the current ToDo lists
2. System delivers an error message to the client.

## Add a new ToDo to the list

### Data

- `<todoTitle> required`
- `<todoDescription> optional`

### Primary Course

1. User requests to create a new ToDo with the data above.
2. System creates a ToDo and determines the ToDo id.
3. System adds the new created ToDo to the ToDos list.
4. System delivers the updated list to the client.

### Exception Course

1. User requests to create a new ToDo with the data above
2. System delivers an error message to the user interface.

## Change a ToDo title or description

### Data

- `<todoId> required`
- `<todoTitle> required for changing title`
- `<todoDescription> required for changing description`

### Primary Course

1. User requests to change an existing ToDo with the data above.
2. System search and update the found ToDo with the new title and/or description.
3. System delivers the updated list to the client.

### Exception Course

1. User requests to change an existing ToDo with the data above.
2. System delivers an error message to the user interface.

## Toggle a ToDo state

### Data

- `<todoId> required`

### Primary Course

1. User requests to toggle an existing ToDo with the data above.
2. System search and update the found ToDo with the new state.
3. System delivers the updated list to the client.

### Exception Course

1. User requests to change an existing ToDo with the data above.
2. System delivers an error message to the user interface.

## Remove a ToDo

### Data

- `<todoId> required`

### Primary Course

1. User requests to remove an existing ToDo with the data above.
2. System search and removes the found ToDo.
3. System delivers the updated list to the client.

### Exception Course

1. User requests to remove an existing ToDo with the data above.
2. System delivers an error message to the user interface.
