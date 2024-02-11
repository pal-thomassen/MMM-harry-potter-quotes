# MMM-harry-potter-quotes

A [MagicMirror²](https://magicmirror.builders/) module which uses the open API from <https://github.com/joeltgray/HarryPotterAPI> to fetch a random quote.

The modules does not depend on any 3rd party packages.

## Installing

In your MagicMirror directory:

```bash
cd modules
git clone https://github.com/pal-thomassen/MMM-harry-potter-quotes
```

## Updating the module

In your MagicMirror directory. This will pull the latest code from github.

```bash
cd modules/MMM-harry-potter-quotes
git pull
```

## Configuration

Not many options, but some.

| Option    | Description                                                                                                                        | Default value | Possible values                                |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------- |
| size      | The size of the modules. Both width and font size                                                                                  | "small"       | "xsmall", "small", "medium", "large", "xlarge" |
| runAtHour | Configures the module to fetch a quote at the apropriate hour. For example 2 will configure it to fetch a new quote at 02:00 daily | undefined     | 0-23                                           |

When rutAtHour is set the interval configuration will be ignored.

## Example config.js

An example config.js configuration. This would fetch a new quote once every hour.

```javascript
{
	module: "MMM-harry-potter-quotes",
	position: "top_left",
	config: {
		size: "small",
    runAtHour: 2
	}
}
```

## Contributing

If you find any issues, or would like to participate. Just open an issue or pull request in this repository.
