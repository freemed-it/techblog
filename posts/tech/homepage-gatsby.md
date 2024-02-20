---
type: 'tech'
tags: [Gatsby, 마크다운, SEO]
published: true
thumbnail: 'posts/tech/thumbnail_01.png'
title: 'Gatsby 홈페이지 리뉴얼 개발기'
description: '프리메드 리브랜딩 홈페이지 Gatsby 개발기를 공유합니다.'
profile: 'posts/tech/thumbnail_01.png'
author: '김재이 · IT기획팀'
date: 2023-02-19
---

### 1. 기술스택은 이러합니다.

사용한 기술스택은 아래와 같습니다

![gatsby](/posts/tech/content_01.png)

**1. Gatsby를 선택하게된 이유**

- Gatsby를 선택하게된 이유 1
- Gatsby를 선택하게된 이유 2
- Gatsby를 선택하게된 이유 3

**install**

`yarn add gatsby`

```typescript
export async function generateStaticParams() {
  const posts = getAllPosts()
  const result = (await posts).reduce<Array<{ type: string; slug: string }>>((prev, { fields: { slug } }) => {
    const [type, slugs] = `${slug.replace('.md', '')}`.split('/')
    prev.push({ type, slug: slugs })
    return prev
  }, [])

  return result
}
```

> **Gatsby에는 이러한 장점이 있습니다.**
>
> - Gatsby 장점 1
> - Gatsby 장점 1
> - Gatsby 장점 1 **이러한 장점으로 효과적으로 사용할 수 있습니다**
