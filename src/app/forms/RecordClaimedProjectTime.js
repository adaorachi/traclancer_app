import React from 'react';
import { Select } from 'antd';

class RecordClaimedProjectTime extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    // const mapStages = this.props.stages.map(sta => (
    //   <Select.Option value={sta.id} key={sta.title}>{sta.title}</Select.Option>
    // ));

    const mapStages = this.props.stages.map(sta => (
      <Select.Option>{sta}</Select.Option>
    ));

    console.log(this.props.stages, 'meme')

    return (
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="What project Stage did you work on?"
        optionFilterProp="children"
        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
       {mapStages}
      </Select>
    );
  }
}

export default RecordClaimedProjectTime;
