/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCO010', {
    TCO_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TCO_CODMEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCO_DESMEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TCO_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TCO_OBSMEL: {
      type: "VARBINARY",
      allowNull: true
    },
    TCO_CODIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCO_PRIORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TCO_CODRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TCO_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TCO_CODACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCO_FLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TCO_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TCO_CODDAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCO_CODFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCO_STATUS: {
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
    tableName: 'TCO010'
  });
};
