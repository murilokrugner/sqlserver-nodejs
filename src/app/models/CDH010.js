/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CDH010', {
    CDH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDH_TIPOIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDH_TIPOPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDH_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDH_LIVRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDH_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDH_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CDH_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CDH_CONSO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CDH_FILDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDH_FILATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDH_LINHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDH_SUBITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CDH_CODLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                      '
    },
    CDH_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    CDH_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CDH_CLVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CDH_ESTGNR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDH_GNRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CDH_PRETIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDH_NUMTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CDH_PARTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDH_TPTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDH_FORTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CDH_LOJTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDH_GNREF3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CDH_TPLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                      '
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
    CDH_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CDH_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDH_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CDH_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDH_TPMOVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CDH010'
  });
};
