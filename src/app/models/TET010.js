/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TET010', {
    TET_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TET_CDOCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TET_ATEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    TET_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TET_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TET_FREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TET_QTDMUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TET_UTILIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TET_RECUPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TET_RECDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    tableName: 'TET010'
  });
};
