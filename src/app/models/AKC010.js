/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AKC010', {
    AKC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AKC_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AKC_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AKC_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AKC_CO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AKC_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AKC_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AKC_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AKC_HIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AKC_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    AKC_VALOR1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AKC_KEYREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    AKC_OPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AKC_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AKC_TPSALD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    AKC_VALOR2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AKC_VALOR3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AKC_VALOR4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AKC_VALOR5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AKC_CODPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    AKC_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    AKC_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AKC_ITCTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AKC_CLVLR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AKC_EXEPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
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
    AKC_UNIORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    }
  }, {
    tableName: 'AKC010'
  });
};
