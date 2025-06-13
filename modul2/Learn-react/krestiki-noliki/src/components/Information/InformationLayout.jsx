import React from 'react';
import PropTypes from 'prop-types';
import styles from './Information.module.css';

export default function InformationLayout({ text }) {
  return <div className={styles.info}>{text}</div>;
}

InformationLayout.propTypes = {
  text: PropTypes.string.isRequired,
};
