/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ABI010', {
    ABI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ABI_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ABI_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ABI_ETAPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ABI_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    ABI_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ABI_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    ABI_CODPRB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ABI_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ABI_INIPRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ABI_FIMPRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ABI_NUMOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ABI_SITATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ABI_INIREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ABI_FIMREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ABI_NUMPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ABI_ITEMPV: {
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
    tableName: 'ABI010'
  });
};
