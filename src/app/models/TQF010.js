/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TQF010', {
    TQF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TQF_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQF_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TQF_CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    TQF_NREDUZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    TQF_CIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TQF_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TQF_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TQF_TIPPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TQF_CONVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TQF_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TQF_CODFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TQF_CONTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    TQF_FUNCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TQF_CONTFN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TQF_DTCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TQF_DTDESA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TQF_DTREAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TQF_LANMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TQF_DTUMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TQF_USUARI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    TQF_COMBOI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TQF_FROTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    }
  }, {
    tableName: 'TQF010'
  });
};
