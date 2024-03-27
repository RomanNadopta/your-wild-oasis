import Markdown from 'react-markdown';
import styled from 'styled-components';

import Container from '../../ui/BodyContainer';
import PageHeading from '../../ui/PageHeading';
import Button from '../../../admin/ui/Button';
import { SmoothScrollLink } from '../../ui/SmoothScrollLink';
import { usePolicy } from './usePolicy';
import Spinner from '../../../admin/ui/Spinner';

const NavigationLink = styled.ol`
  padding: 2rem 0;

  li {
    position: relative;
    padding-left: 3rem;
  }
  a {
    font-size: 1.8rem;
    color: green;
    &:hover {
      color: #040455;
      text-decoration: underline;
    }
  }
  @media (min-width: 900px) {
    padding: 4rem 10rem;
    a {
      padding-left: 4rem;
      font-size: 2rem;
    }
  }
`;

const ContentList = styled.ol`
  padding: 2rem 0;
`;

const ContentItem = styled.li`
  padding: 1rem 0;

  p {
    padding: 1rem 0;
  }
`;

const StyledList = styled.div`
  padding: 0 3rem;
  font-family: 'Libre Baskerville';

  .header-title {
    padding-top: 4rem;
    text-align: center;
  }

  .content-article {
    ul {
      margin: 0 auto;
    }

    li {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }

  p,
  li {
    font-size: 1.6rem;
  }

  .content-title {
    padding: 2rem 0;
  }

  h4 {
    font-style: italic;
  }

  @media (max-width: 899px) {
    .navigation {
      h3 {
        padding-top: 1rem;
        text-align: center;
      }
    }
    h4 {
      font-size: 1.8rem;
    }
  }

  ol {
    list-style: none;
    li {
      position: relative;
    }
    h4 {
      padding-left: 3rem;
    }

    li::before {
      content: counter(list-item) '.';
      position: absolute;

      left: 0;

      font-size: 1.8rem;
      font-weight: 600;
    }
  }

  ul {
    list-style: none;

    li {
      position: relative;
      padding-left: 1.5em;
    }

    li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 28px;

      width: 8px;
      height: 8px;
      background-color: #333;
      border-radius: 50%;
    }
  }

  @media (min-width: 900px) {
    max-width: 100rem;
    margin: 0 auto;
    display: grid;
    gap: 3rem;

    .header-title {
      padding-top: 10rem;
      text-align: start;
    }

    p,
    li {
      font-size: 1.8rem;
      line-height: 1.8;
    }

    ol {
      list-style: none;
      li {
        position: relative;
      }
      h4 {
        padding-left: 4rem;
      }

      li::before {
        font-size: 2rem;
      }
    }

    ul {
      padding-left: 20px;
      li::before {
        top: 32px;
      }
    }
    .content-article {
      ul {
        width: 80%;
        margin: 0 auto;
      }
      h4 {
        padding-left: 3rem;
      }
      li {
        padding-top: 2rem;
        padding-bottom: 2rem;
      }
    }
  }
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: flex-end;
  .back-to {
    font-size: 1.6rem;
    color: var(--color-blue-700);
  }
  @media (min-width: 900px) {
    .back-to {
      /* font-size: 1.8rem; */
    }
  }
`;

function PrivacyBody() {
  const { isLoading, policy } = usePolicy();
  if (isLoading) return <Spinner />;
  const { mainTitle, paragraph, policyTitle } = policy.at();

  return (
    <Container>
      <StyledList>
        <PageHeading className='header-title' as='h2'>
          {mainTitle}
        </PageHeading>
        <p>{paragraph}</p>
        <div className='navigation'>
          <PageHeading as='h3'>{policyTitle}</PageHeading>
          <NavigationLink>
            {policy.map(
              (privacy) =>
                privacy && (
                  <li key={privacy.id}>
                    <SmoothScrollLink to={privacy.id}>
                      <a href={`#${privacy.id}`}>{privacy.listTitle}</a>
                    </SmoothScrollLink>
                  </li>
                )
            )}
          </NavigationLink>
        </div>

        <ContentList>
          {policy.map(
            (privacy) =>
              privacy && (
                <ContentItem key={privacy.id}>
                  <PageHeading id={privacy.id} as='h4'>
                    {privacy.listTitle}
                  </PageHeading>
                  <Markdown className='content-article'>
                    {privacy.listArticle}
                  </Markdown>
                  <StyledButton>
                    <SmoothScrollLink>
                      <Button
                        className='back-to'
                        size='large'
                        variation='secondary'
                      >
                        Back To Top
                      </Button>
                    </SmoothScrollLink>
                  </StyledButton>
                </ContentItem>
              )
          )}
        </ContentList>
      </StyledList>
    </Container>
  );
}

export default PrivacyBody;
