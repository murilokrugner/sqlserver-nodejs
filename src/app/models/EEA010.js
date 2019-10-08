/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EEA010', {
    EEA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EEA_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EEA_FASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEA_TIPDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    EEA_TITULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    EEA_CLADOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                   '
    },
    EEA_IDIOMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    EEA_ARQUIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EEA_RDMAKE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    EEA_FILTRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    EEA_CNTLIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEA_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEA_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEA_DOCAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEA_DOCBAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EEA_PE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EEA_TABCAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EEA_TABDET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EEA_INDICE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEA_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    EEA_IMPINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEA_MARCA: {
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
    }
  }, {
    tableName: 'EEA010'
  });
};
