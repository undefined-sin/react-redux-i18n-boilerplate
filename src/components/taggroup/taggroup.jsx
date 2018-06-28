import React, { Component } from 'react';
import Tag from '@basepath/components/tag/tag';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TagGroupStyled = styled.div`
    padding: 20px 0 0 0;
    display: flex;
`;

class TagGroup extends Component {

    static propTypes = {
        tags: PropTypes.arrayOf(PropTypes.object),
        handleDelete: PropTypes.func,
        handleAddition: PropTypes.func
    };

    static defaultProps = {
        tags: []
    };

  constructor(props) {
    super(props);
  }

  handleTagClick(event, index) {
    console.log('handleTagClick');
  }

  handleDeletionTag(event, index) {
    this.props.handleDelete(event, index);
    index.stopPropagation(); // Avoid execution of parent span onClick event
  }

  handleTagGroupClick() {
    console.log('handleTagGroupClick');
  }

  generateTags(tags) {
    return tags.map((tag, index) => {
        return (
            <Tag key={tag.title}
                 title={tag.title}
                 onClick={this.handleTagClick.bind(this, index)}
                 onDelete={this.handleDeletionTag.bind(this, index)}
            />
        );
    });
  }

  render() {
    const { tags } = this.props;
    return (
      <TagGroupStyled>
        {this.generateTags(tags)}
      </TagGroupStyled>
    );
  }
}

export default TagGroup;