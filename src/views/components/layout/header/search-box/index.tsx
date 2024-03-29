// lib
import React from 'react';
// component
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
// localization
import { useTranslation, NamespaceEnum } from '@i18n';
// type
import { StyledComponentProps } from '@type/material-ui';

import { useStyles, styles } from './style';

interface Props extends StyledComponentProps<typeof styles> {}

const SearchBox: React.FC<Props> = (props) => {
  const classes = useStyles(props);
  const { t } = useTranslation(NamespaceEnum.COMMON);

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
