/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FKC010', {
    FKC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FKC_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FKC_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    FKC_ACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FKC_TPVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FKC_APLIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FKC_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FKC_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FKC_RECPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FKC_VARCTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FKC_REGRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                        '
    },
    FKC_NDIAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'FKC010'
  });
};
