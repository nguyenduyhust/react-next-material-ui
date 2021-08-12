// lib
import React from 'react';
// component
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
// localization
import { useTranslation } from 'next-i18next';
// type
import { StyledComponentProps } from '~/types/material-ui';

import { useStyles, styles } from './style';

interface Props extends StyledComponentProps<typeof styles> {}

const SearchBox: React.FC<Props> = (props) => {
  const classes = useStyles(props);
  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder={t('header.search_box_placeholder')}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </div>
  );
};

export default SearchBox;
