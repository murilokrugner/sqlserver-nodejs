/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STG010', {
    TG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TG_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TG_SERVICO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TG_SEQRELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TG_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TG_TIPOREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TG_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TG_QUANREC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TG_QUANTID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TG_UNIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TG_RESERVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TG_DESTINO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TG_QTDGARA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TG_UNIGARA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TG_CONGAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TG_SEQUENC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TG_LOCAL: {
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
    },
    TG_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TG_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TG_CODAEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'STG010'
  });
};
