/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RDV010', {
    RDV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDV_CODPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDV_CODOBJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDV_CODPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDV_CODDOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDV_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RDV_CODPAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDV_VERATU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RDV_DTAPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    tableName: 'RDV010'
  });
};
