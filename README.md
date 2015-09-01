# Recess

Recess is a convenient way to style React components. It has a pre-built library of styles to choose from (that are easily extended or modified), and also serves as storage for component-specific styles that you create. It is responsive, and includes state-based styling for elements.

### Browser support

We support current version - 2 for all popular browsers, which translates to the following:
* IE10+
* Chrome
* Firefox
* Safari
* Opera

The methods and a vast majority of the styles will still work just fine in IE9, however there are no polyfills so certain properties (such as flexbox) will not work in those environments. If you are unsure whether or not a property is supported, consult the wonderful resource [caniuse](http://caniuse.com/).

### Basic usage

If you just want to use the styles available in recess, just bring it into your project and start using the properties!

```
var recess = require("recess");

...
<div style={recess.containerFixed}>
    <h3 style={recess.h3}>
      Responsive containers
    </h3>
    
    <p style={recess.p}>
      I am a container that will be a fixed width, that will responsively
      change based on overall screen size.
    </p>
</div>
```

### Extending the default styles

You can also build upon the existing library object by using the *extend* method in the *componentWillMount* function.

```
componentWillMount:function() {
  recess.extend({
    container:{
      backgroundColor:"#ccc"
    },
    ginormousText:{
      fontSize:50
    }
  });
}
```

With that same interface you can also create new properties that don't already exist, hence the *ginormousText* property.

### Component-specific styles

You can also create component-specific styles that will not pollute the default styles. This is a convenient way to separate your styles by concerns.

```
componentWillMount:function() {
  recess.styles(this,{
    image:recess.combine(recess.imgResponsive,{
      borderRadius:4
    }),
    greenBackground:{
      backgroundColor:"green"
    }
  });
}
```

Notice that you pass *this* as the first parameter, and the styles object as the second, which associates the styles with this particular component. Then you can retrieve them for use later:

```
render:function() {
  var styles = recess.styles(this);
  
  return (
    <div style={styles.greenBackground}>
      <img src="some-kitty.png" alt="Cats are cool" style={styles.img} />
    </div>
  );
}
```

### Combine styles

Another thing to note from above is that you can combine styles to create a new one with the *combine* method. This accepts as many parameters as you'd like. This is especially useful with render-specific styles.

```
render:function() {
  var styles = recess.styles(this),
      renderStyles = {
        container:recess.combine(recess.container,recess.textBig,recess.textItalic,{
          backgroundColor:"red"
        });
      };
      
  return (
    <div style={renderStyles.container}>
      Now I am responsive, plus a legitimate requirement!
    </div>
  );
}
```

### Dynamic styles

Static styles are cool, but what if you want dynamic styles? Recess has you covered for:
* hover
* active
* focus
* disabled
* readonly

First, you need to create a recess element with the *element* method:

```
var Button = recess.element(<button/>);
```

And then you just pass in the object of states to the element (all other standard properties for that element work just the same):

```
var buttonStates = {
      hover:recess.buttonPrimaryHover
    };

render:function() {
  return (
    <div style={recess.containerFlex}>
      <Button
        className="my-special-button"
        states={buttonStates}
        style={recess.buttonPrimary}
        type="button">
        I haz de hover
      </Button>
    </div>
  );
}
```

There is also a convenience function if you wanted to store these states just like your component styles.

```
componentWillMount:function() {
  recess
    .styles(this,{
      button:recess.combine(recess.buttonPrimary,{
        fontSize:50
      })
    })
    // chained because the first style needs to be created first
    .styles(this,{
      buttonHover:recess.combine(recess.styles(this).button,{
        transform:"scale(1.2)"
      });
    })
    .states(this,{
      button:{
        hover:recess.styles(this).buttonHover
      }
    });
}
...
render:function() {
  var styles = recess.styles(this),
      states = recess.states(this);
  
  return (
    <div style={recess.containerFlex}>
      <Button
        className="my-special-button"
        states={states.button}
        style={styles.button}
        type="button"
    </div>
  );
}
```

### Creating stylesheets

Just in case you want to create a stylesheet (like if you wanted to have styling on html, for example), you can use the *stylesheet* method to build it. You can either use a string:

```
var css = "html,body {min-height:100vh}";
...
componentWillMount:function() {
  recess.stylesheet(css);
}
```

Or you can build it with recess style objects:

```
componentWillMount:function() {
  recess.stylesheet({
    "html, body":{
      minHeight:"100vh"
    }
  });
}
```

Either way, your stylesheet will be generated and injected into the document's *head*.

### Prefixes

Recess comes with a prefixer method that will handle all prefixes for the browsers we support.

```
console.log(recess.prefix({
  userSelect:"none"
}));

// {WebkitUserSelect:"none"}
```

This is useful if you are not storing styles or are doing render-specific styles. It also works with nested objects:
```
console.log(recess.prefix({
  buttonStates:{
    hover:{
      userSelect:"none"
    }
  }
}));

// {buttonStates:{hover:{WebkitUserSelect:"none"}}}
```

By default, all styles that you store by any method are autoprefixed, with the exception of stylesheets where you pass a string parameter (objects are prefixed).

### Please help!

This project is still very young, and we welcome all pull requests or feature enhancements. Tell us what you want to see!
