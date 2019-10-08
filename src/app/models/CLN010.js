/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CLN010', {
    CLN_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CLN_UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CLN_CODIPM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    CLN_DSCIPM: {
      type: "IMAGE",
      allowNull: true
    },
    CLN_DTINIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CLN_DTFIMV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CLN_TIPO: {
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
    tableName: 'CLN010'
  });
};
