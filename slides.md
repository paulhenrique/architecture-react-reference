---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
# some information about your slides, markdown enabled
title: Arquitetura Front-end orientada a Dados
# info: 
# apply any unocss classes to the current slide
# class: text-center
# https://sli.dev/custom/highlighters.html
# highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-up
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
colorSchema: dark
aspectRatio: 16/9
themeConfig:
  primary: '#5d8392'
plantUmlServer: 'https://www.plantuml.com/plantuml'

layout: cover
---

# Arquitetura React (referência)


---

<div class="flex gap-5 flex-col items-start">


<div class=" p-5 flex-1">

<div class="bg-[#1f1f1fcc] p-2 px-5 rounded flex gap-5 flex-row items-start">
<div class="flex flex-row gap-2 items-center justify-between">
  <span><img src="/images/paulo.jpeg" class="w-20 rounded-full" /></span>
  <div class="flex flex-col">
    Paulo Cândido
    <span class="text-sm">
      @paulhenrique
    </span>
  </div>
  <img src="/images/qr_code.png" class="w-15">
</div>
</div>

```json
{ 
  "name": "Paulo Cândido",
  "professional": [
    "Senior Frontend Develiper no CPQD",
    "Organizador do Front in Campinas",
    "Membro da Liga voluntária do MWPT"
  ],
  "technologies": [
    "React", "Vue", "Typescript", "3D Maps", "Progressive Web Apps" 
  ],
  "likes": [
    "Animes", "Séries", "The Office", "Musician"
  ]
}
```
</div>

</div>

<!-- <div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/paulhenrique" target="_blank" alt="GitHub" title="Abrir perfil no github"
    class="text-xl slidev-icon-btn !border-none !hover:opacity-90">
    <carbon-logo-github />
  </a>
</div>   -->

---
hide: true
---

# Agenda
- O que é interessante de definir em uma arquitetura? 
- A arquitetura abrange todas as possibilidades e necessidades? Não
- Linguagem de programação
- Roteamento da aplicação
- Organização de Componentes
  - Estrutura do componente
- Organização de Hooks 
  - Estrutura do Hook
- Organização de páginas
  - Estrutura da página 
- Constantes
  - Estrutura das constantes
- Providers
  - Estrutura dos providers
- Store
  - Estrutura da store
  - Redux Toolkit
- Types 
  - Estrutura de Types
- Stories (storybook)
  - Estrutura da história
- Testes
  - Estrutura dos testes
- Mock
  - Estrutura de adoção dos mocks
- Style
  - Estrutura de adoção dos mocks
- Extensões necessárias para o desenvolvimento
- Verificação estática de código de formatação
- Comunicação com API
  - Serviços
  - Manipulação de queries

---
layout: cover
---

# Por que precisamos ter uma <span v-mark.line.red="1">arquitetura de referência?</span>

<span v-click="2">
Na prática, uma referência de arquitetura oferece uma linguagem comum para todos os membros da equipe, desde desenvolvedores até stakeholders. Isso facilita a comunicação e a colaboração, assegurando que todos estejam na mesma página. Além disso, com uma arquitetura bem definida, podemos reutilizar componentes e soluções já testadas, aumentando a eficiência e a consistência do desenvolvimento. Em suma, ela promove um ambiente de trabalho mais organizado e produtivo, onde as soluções são mais robustas e o tempo de desenvolvimento é otimizado.
</span>

---
layout: intro
---

# O que precisamos definir em uma arquitetura de referência?
Estrutura de pastas, bibliotecas e tecnologias, design patterns e abordagens <span v-mark.line.red="0">recomendados</span>.

---
layout: intro
---

# Por que "referência"?
Temos diversos <span v-mark.line.red="1">tipos de projetos</span> com diferentes fins no CPQD, particularmente para algumas soluções teremos abordagens diferentes a serem utilizadas, <span v-mark.line.red="2">por isso é uma referência</span>, ao se criar algo novo ela é usada como base, mas não está cravada em pedra e também deve estar em <span v-mark.line.red="3">constante evolução</span>.



---
layout: center
---

# Estrutura base

```md
  📦src
 ┣ 📂App 
 ┣ 📂__test__ 
 ┣ 📂config
 ┣ 📂hooks 
 ┣ 📂mock
 ┣ 📂pages
 ┣ 📂providers
 ┣ 📂routers
 ┣ 📂services 
 ┣ 📂store 
 ┣ 📂types
 ┣ 📂styles
```

---
layout: center
---

# Components

```mdx
📦components
 ┣ 📂Button
 ┃ ┣ 📜Button.spec.tsx
 ┃ ┣ 📜Button.stories.tsx
 ┃ ┣ 📜Button.tsx
 ┃ ┗ 📜index.tsx
 ┗ 📜index.ts
```

---
layout: center
---


## 📜 Button.tsx

```tsx {1-4|6-8|10-12|*}{lines:true}
/**
 * @file Button.tsx
 * @description Button component.
 */

interface ButtonProps {
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
```

---

## 📜 Button.\[spec|test\].tsx

```tsx {1,2|1,2,15-17|1,2,19-22|3,5,8-11|*}{lines:true}
import { render } from "@testing-library/react";
import { Button } from "./Button";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("Accessibility Button Tests", () => {
  it("Should no have accessibility violations", async () => {
    const { container } = render(<Button>Vai teia</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Button test", () => {
  it("renders without crashing", () => {
    render(<Button>Content</Button>);
  });

  it("should render successfully", () => {
    const { baseElement } = render(<Button>Vai teia</Button>);
    expect(baseElement).toBeTruthy();
  });
});

```

---

## 📜 Button.stories.tsx

```tsx {4-9|10,11|13-17|*}{lines:true}
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Vai teia",
  },
};
```
<span v-click>

<br/>

### Recomendação
Tente começar pelo storybook, tente criar componentes reutilizáveis e com testes focados, unitários de fato.

</span>

---
layout: center
---

# Pages

```md
📦pages
 ┣ 📂Home
 ┃ ┣ 📜Home.spec.tsx
 ┃ ┣ 📜Home.stories.tsx
 ┃ ┣ 📜Home.tsx
 ┃ ┗ 📜index.tsx
 ┗ 📜index.ts
```
 
---

# Home.tsx

```tsx {*}{lines:true}
/**
 * @file Home.tsx
 * @description Home page.
 */

export const Home = () => {
  return <div>Home</div>;
};

export default Home;

```

---

# Home.\[spec|test\].tsx

```tsx {*}{lines:true}
import { render } from "@testing-library/react";
import { Home } from "./Home";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("Accessibility Home Tests", () => {
  it("Should no have accessibility violations", async () => {
    const { container } = render(<Home />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Home test", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });

  it("should render successfully", () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toBeTruthy();
  });
});
```

---

# Home.stories.tsx

```tsx {*}{lines:true}
import type { Meta, StoryObj } from "@storybook/react";
import { Home } from "./Home";

const meta = {
  title: "Components/Home",
  component: Home,
  tags: ["autodocs"],
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

```

---
layout: center
---

# Hooks

```md
📦hooks
 ┣ 📂useExampleHook
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜useExampleHook.spec.tsx
 ┃ ┗ 📜useExampleHook.tsx
 ┗ 📜index.ts
```

---

# 📜 useExampleHook.tsx

```tsx {*|5-8|10-16|*}{lines:true}
/**
 * @file useExampleHook.tsx
 * @description useExampleHook hook.
 */
interface UseExampleHookProps {
  // Params here
  fromProps: string;
}

export const useExampleHook = ({ fromProps }: UseExampleHookProps) => {
  const exampleProperty = fromProps + "example";

  return {
    exampleProperty,
  };
};

export default useExampleHook;

```

---

# 📜 useExampleHook.\[spec|test\].tsx

```tsx {*|8,10}{lines:true}
import { renderHook } from "@testing-library/react-hooks";

import { useExampleHook } from "./useExampleHook";

describe("useExampleHook Test", () => {
  it("should return the example property", () => {
    const { result } = renderHook(() =>
      useExampleHook({ fromProps: "example" })
    );
    expect(result.current.exampleProperty).toBe("exampleexample");
  });
});

```

---


# Services : ApiServices

```tsx {*|2-6|7-17|18-28}{lines:true, maxHeight:'60vh'}
const ApiServices = {
  find: async (endpoint: string) => {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  },
  create: async (endpoint: string, data: any) => {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataResponse = await response.json();
    return dataResponse;
  },
  delete: async (endpoint: string, data: any) => {
    const response = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataResponse = await response.json();
    return dataResponse;
  },
};

export default apiServices;
```

---

# 📜 ApiServices.test.ts

```tsx {*|4-9|14-20|22-35|37-44}{lines:true, maxHeight:'60vh'}
import ApiServices from ".";

describe("ApiServices", () => {
  it("O ApiServices possui o método find", () => {
    expect(ApiServices.find).toBeDefined();
  });

  it("O ApiServices possui o método create", () => {
    expect(ApiServices.create).toBeDefined();
  });
});

describe("create function", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: "Success" }),
      })
    );
  });

  test("should make a POST request with the correct endpoint and data", async () => {
    const fakeEndpoint = "https://example.com/api";
    const fakeData = { key: "value" };

    await ApiServices.create(fakeEndpoint, fakeData);

    expect(global.fetch).toHaveBeenCalledWith(fakeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fakeData),
    });
  });

  test("should return the data response from the server", async () => {
    const fakeEndpoint = "https://example.com/api";
    const fakeData = { key: "value" };

    const result = await ApiServices.create(fakeEndpoint, fakeData);

    expect(result).toEqual({ message: "Success" });
  });
});

```

---

# Lógica de Serviços

* Prototype Service: https://javascriptpatterns.vercel.app/patterns/design-patterns/factory-pattern

---
layout: iframe
url: https://javascriptpatterns.vercel.app/patterns/design-patterns/factory-pattern
---

---
layout: center
---

# Entidade
* Type
* Service
* Teste do serviço

---


# Vamos adotar o usuário como exemplo

<span v-click>

```tsx
interface User {
  name: string;
  userName: string;
  age: number;
}
...

const UserService = {
  getUsers: () => {
    return ApiServices.find('/api/users') as User[];
  }
}

```

</span>


---

````md magic-move

```tsx
const UserData = () => {
  return JSON.stringify({}, null, 2);
}
```

```tsx
const UserData = () => {
  const [users, setUsers] = useState([] as User[]);
  return JSON.stringify({}, null, 2);
}
```

```tsx
const UserData = () => {
  const [users, setUsers] = useState([] as User[]);

  const getUserData = async () => {
    const usersData = await UserService.getUsers();
    setUsers(usersData);
  }

  return JSON.stringify({}, null, 2);
}
```

```tsx
const UserData = () => {
  const [users, setUsers] = useState([] as User[]);

  const getUserData = async () => {
    const usersData = await UserService.getUsers();
    setUsers(usersData);
  }

  useEffect(() => {
    getUserData()
  }, [])

  return JSON.stringify(users, null, 2);
}
```

```tsx
const UserData = () => {
  const [users, setUsers] = useState([] as User[]);
  const [loading, setLoading] = useState(false);

  const getUserData = async () => {
    setLoading(true);
    const usersData = await UserService.getUsers();
    setUsers(usersData);
    setLoading(false);
  }

  useEffect(() => {
    getUserData()
  }, [])

  return JSON.stringify(users, null, 2);
}
```


```tsx
const UserData = () => {
  const [users, setUsers] = useState([] as User[]);
  const [loading, setLoading] = useState(false);

  const getUserData = async () => {
    try{
      setLoading(true); 
      const usersData = await UserService.getUsers();
      setUsers(usersData);
    }finally{
      setLoading(false);
    }
    
  }

  useEffect(() => {
    getUserData()
  }, [])

  return JSON.stringify(users, null, 2);
}
```

```tsx
const UserData = () => {
  const [users, setUsers] = useState([] as User[]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getUserData = async () => {
    try {
      setLoading(true); 
      setHasError(false);
      const usersData = await UserService.getUsers();
      setUsers(usersData);
    } catch(e) {
      setHasError(true);
    } finally {
      setLoading(false);
    }
    
  }

  useEffect(() => {
    getUserData()
  }, [])

  return JSON.stringify(users, null, 2);
}
```

```tsx
const useUserData = () => useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return UserService.getUsers();
    } 
});
...

const UserData = () => {
  const {data: users} = useUserData();
  return JSON.stringify(users, null, 2);
}

```

````

---
layout: iframe
url: https://tanstack.com/query/latest/docs/framework/react/reference/useQuery
---


---

# Cenas dos próximos capítulos

* Mock
* Estilo e utilização de bibliotecas de componentes
* Disponibilização dessa arquitetura de referência 
* React CLI como ferramenta para essa arquitetura
* FKIT do CPQD
  * Administração de Formulários
* Formação Front-end do CPQD
  * https://docs.google.com/spreadsheets/d/14Hz8J6YeGljZUps_lfFeOoTMT02huzY-GZ-lJVza5qM/edit#gid=0