/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EXJ010', {
    EXJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EXJ_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EXJ_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EXJ_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EXJ_INTTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                   '
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
    },
    EXJ_INCOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EXJ_VIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EXJ_CODFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EXJ_NIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    EXJ_MOTNIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EXJ_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    EXJ_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EXJ_COD_ES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EXJ_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EXJ_COD_MU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EXJ_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EXJ_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EXJ_ORI_1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EXJ_ORI_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EXJ_ORI_3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'EXJ010'
  });
};
