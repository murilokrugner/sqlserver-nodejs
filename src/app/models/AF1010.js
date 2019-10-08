/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AF1010', {
    AF1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AF1_ORCAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AF1_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AF1_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                          '
    },
    AF1_VALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AF1_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AF1_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AF1_FASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AF1_TPORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AF1_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AF1_DTCONV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AF1_DELIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF1_MASCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AF1_NMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF1_NMAXF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF1_TRUNCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF1_BDI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF1_VALBDI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF1_BDIPAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF1_RECALC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF1_AUTCUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF1_CTRUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF1_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF1_CODORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AF1_GETTRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
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
    AF1_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AF1_NOMPRJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    AF1_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF1_CODENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AF1_LOJENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AF1_VEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'AF1010'
  });
};
