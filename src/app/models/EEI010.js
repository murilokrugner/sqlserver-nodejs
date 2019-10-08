/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EEI010', {
    EEI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EEI_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EEI_PROIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEI_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEI_COD_I: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EEI_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EEI_INSNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEI_CRITOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EEI_CDNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEI_ACCOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    tableName: 'EEI010'
  });
};
