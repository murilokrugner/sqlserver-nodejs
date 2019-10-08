/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QUG010', {
    QUG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUG_NUMAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QUG_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUG_CHKLST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QUG_REVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUG_CHKITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QUG_QSTITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QUG_ITESEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUG_CODNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QUG_REVNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUG_OCORNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QUG_ACACOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QUG_PRAZO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QUG_CATEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QUG_DESCHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'QUG010'
  });
};
