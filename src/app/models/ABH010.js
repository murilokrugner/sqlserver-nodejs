/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ABH010', {
    ABH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ABH_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ABH_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ABH_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ABH_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    ABH_REFER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ABH_ENTREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ABH_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    ABH_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ABH_CPAGPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ABH_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ABH_SITUAC: {
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
    tableName: 'ABH010'
  });
};
