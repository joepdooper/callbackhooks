# CallbackHooks

**CallbackHooks** is a lightweight and flexible callback/event management library for JavaScript.  
It lets you easily add, organize, and execute callback functions tied to named events.

## Installation

Install via npm:

```bash
npm install callbackhooks
```

## Usage

```javascript
// Import the CallbackHooks class
import { CallbackHooks } from 'callbackhooks';

// Create a new instance of CallbackHooks
const hooks = new CallbackHooks();

// Add a callback to an event named 'userLogin'
hooks.add('userLogin', function(userData) {
console.log('User logged in:', userData);
});

// Add a callback to an event named 'userLogout'
hooks.add('userLogout', function() {
console.log('User logged out');
});

// Call the 'userLogin' event with parameters (user data)
hooks.call('userLogin', { name: 'Joe', age: 30 });

// Call the 'userLogout' event (no parameters needed)
hooks.call('userLogout');
```

## API

`new CallbackHooks()`
Creates a new, isolated instance.

`.add(eventName, callback)`
Adds a callback to the specified event name.

`eventName (string)`
The name of the event.

`callback (function)`
The function to be called when the event is triggered.

`.call(eventName, params)`
Triggers the event, executing all associated callbacks.

`eventName (string)`
The name of the event to trigger.

`params (any)`
The data to pass to each callback.

## Example Use Cases

- Plugin systems
- Event-driven modules
- Custom event handling in apps
- Decoupled function execution