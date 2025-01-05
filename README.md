# callbackhooks

```javascript
// Import the CallbackHooks module
import { CallbackHooks } from './callbackhooks.js';

// Add a callback to an event named 'userLogin'
CallbackHooks.add('userLogin', function(userData) {
console.log('User logged in:', userData);
});

// Add a callback to an event named 'userLogout'
CallbackHooks.add('userLogout', function() {
console.log('User logged out');
});

// Call the 'userLogin' event with some parameters (user data)
CallbackHooks.call('userLogin', { name: 'Joe', age: 30 });

// Call the 'userLogout' event (no parameters needed)
CallbackHooks.call('userLogout');
```