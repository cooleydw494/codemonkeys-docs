[toc]

# Configuration

## 📝 Env
The Env class is an interface for accessing properties defined in your `.env`. On every run of the `monk` CLI, type-hinted properties that help avoid mistakes and make your IDE smarter are regenerated. You may customize or ignore your `config/env.py`, but it is used by core framework code, so _don't remove it or edit the generation tags_.

```python
from config.env import Env
env = Env.get()

# access properties easily
openai_api_key = env.OPENAI_API_KEY
```