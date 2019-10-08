/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('N01010', {
    N01_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N01_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    N01_FILHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N01_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    N01_PATRIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_PROPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N01_COMP8: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    N01_LOGRAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N01_COMP7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    N01_DISTRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N01_COMP1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    N01_SETOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N01_COMP2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    N01_QUADRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N01_COMP3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    N01_SETORF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N01_COMP6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    N01_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N01_COMP4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    N01_SUBLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N01_COMP5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    N01_OCUPAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N01_COMP11: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    N01_IMPOST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_UTILIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N01_COMP9: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    N01_LIMIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_USO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_TRIBUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_TOPOGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_INFO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N01_COMP10: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    N01_PEDOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_TESTAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N01_FUNDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N01_PROFA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N01_PROFB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N01_PROF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N01_AREA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N01_AREACO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N01_TIPOCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N01_COMP12: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    N01_ALINHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_POSIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_ESTRUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_COBERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_PAREDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_FORRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_REVEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_INSTAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_INSTEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_PISO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_ESTCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_OPCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_IMOVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N01_VLRTER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N01_VLRPRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N01_TITULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N01_PREFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    N01_DTEMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N01_DTNOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N01_NOTIFI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N01_JANOTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_CODPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    N01_IMPRES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N01_TPTERR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_TERBAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_AREATO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N01_PASSEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_PAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_LIU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_CLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_EGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_ENE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_AGU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_EGF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N01_VLRALI: {
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
    tableName: 'N01010'
  });
};
