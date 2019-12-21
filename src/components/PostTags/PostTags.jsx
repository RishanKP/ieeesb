import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import { Badge } from 'react-bootstrap';
import "./PostTags.scss";
class PostTags extends Component {
  render() {
    const { tags, isPost } = this.props;
    return (
      <>
        { isPost && tags && <p className="text-muted">Tags:</p>}
        <ul className="post-tags">
          {tags &&
            tags.map(tag => (
              <li key={tag}>
                <Link
                  to={`/tags/${_.kebabCase(tag)}`}
                >
                  <Badge variant="primary" className="text-uppercase">{tag}</Badge>
                </Link>
              </li>

            ))}
        </ul>
      </>
    );
  }
}

export default PostTags;
